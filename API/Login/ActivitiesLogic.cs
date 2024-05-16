
using Domain;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Login;

public interface IActivitiesLogic
{
    Task<List<Activity>> GetActivities();
    Task<Activity> GetActivitiy(Guid id);
}

    public class ActivitiesLogic
    {
        private readonly DataContext _context;

        public ActivitiesLogic(DataContext context)
        {
            _context = context;
        }

        public async Task<List<Activity>> GetActivities()
        {
            return await _context.Activities.ToListAsync();
        }
        public async Task<Activity> GetActivitiy(Guid id)
        {
            return await _context.Activities.FindAsync(id);
        }
    }
