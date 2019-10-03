using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Events
{
    public class Edit
    {
        public class Command : IRequest
        {

            public Guid Id { get; set; }
            public string Title { get; set; }
            public string Description { get; set; }
            public string Category { get; set; }
            public DateTime? Date { get; set; }
            public string City { get; set; }
            public string Venue { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {

                //Handler logic
                var eventDatabase = await _context.Events.FindAsync(request.Id);
                if (eventDatabase == null)
                    throw new Exception("Could not find the event");

                eventDatabase.Title = request.Title ?? eventDatabase.Title;
                eventDatabase.Description = request.Description ?? eventDatabase.Title;
                eventDatabase.Category = request.Category ?? eventDatabase.Category;
                eventDatabase.Date = request.Date ?? eventDatabase.Date;
                eventDatabase.City = request.City ?? eventDatabase.City;
                eventDatabase.Venue = request.Venue ?? eventDatabase.Venue;

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;
                throw new Exception("Problem solving changes");

            }

        }
    }
}