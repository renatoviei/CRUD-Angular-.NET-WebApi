using Microsoft.EntityFrameworkCore;

namespace CRUD.Pessoas.API.Models
{
    public class Contexto : DbContext
    {
        public DbSet<Pessoa> Pessoa { get; set; }

        public Contexto(DbContextOptions<Contexto> opcoes) : base(opcoes)
        {


        }
    }
}