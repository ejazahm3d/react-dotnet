using System;
using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if (!context.Events.Any())
            {
                var events = new List<Event>
                {
                        new Event
                        {
                            Title = "Past Event 1",
                            Date = DateTime.Now.AddMonths(-2),
                            Description = "Event 2 months ago",
                            Category = "drinks",
                            City = "London",
                            Venue = "Pub",
                        },
                        new Event
                        {
                            Title = "Past Event 2",
                            Date = DateTime.Now.AddMonths(-1),
                            Description = "Event 1 month ago",
                            Category = "culture",
                            City = "Paris",
                            Venue = "Louvre",
                        },
                        new Event
                        {
                            Title = "Future Event 1",
                            Date = DateTime.Now.AddMonths(1),
                            Description = "Event 1 month in future",
                            Category = "culture",
                            City = "London",
                            Venue = "Natural History Museum",
                        },
                        new Event
                        {
                            Title = "Future Event 2",
                            Date = DateTime.Now.AddMonths(2),
                            Description = "Event 2 months in future",
                            Category = "music",
                            City = "London",
                            Venue = "O2 Arena",
                        },
                        new Event
                        {
                            Title = "Future Event 3",
                            Date = DateTime.Now.AddMonths(3),
                            Description = "Event 3 months in future",
                            Category = "drinks",
                            City = "London",
                            Venue = "Another pub",
                        },
                        new Event
                        {
                            Title = "Future Event 4",
                            Date = DateTime.Now.AddMonths(4),
                            Description = "Event 4 months in future",
                            Category = "drinks",
                            City = "London",
                            Venue = "Yet another pub",
                        },
                        new Event
                        {
                            Title = "Future Event 5",
                            Date = DateTime.Now.AddMonths(5),
                            Description = "Event 5 months in future",
                            Category = "drinks",
                            City = "London",
                            Venue = "Just another pub",
                        },
                        new Event
                        {
                            Title = "Future Event 6",
                            Date = DateTime.Now.AddMonths(6),
                            Description = "Event 6 months in future",
                            Category = "music",
                            City = "London",
                            Venue = "Roundhouse Camden",
                        },
                        new Event
                        {
                            Title = "Future Event 7",
                            Date = DateTime.Now.AddMonths(7),
                            Description = "Event 2 months ago",
                            Category = "travel",
                            City = "London",
                            Venue = "Somewhere on the Thames",
                        },
                        new Event
                        {
                            Title = "Future Event 8",
                            Date = DateTime.Now.AddMonths(8),
                            Description = "Event 8 months in future",
                            Category = "film",
                            City = "London",
                            Venue = "Cinema",
                        }
                };
                context.Events.AddRange(events);
                context.SaveChanges();
            }
        }
    }
}