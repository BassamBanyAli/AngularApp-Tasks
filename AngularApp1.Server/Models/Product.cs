using System;
using System.Collections.Generic;

namespace AngularApp1.Server.Models;

public partial class Product
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public int? Price { get; set; }

    public string? Description { get; set; }

    public string? ImagePath { get; set; }
}
