import React, { useState } from 'react';
import { LuCopy, LuCheck, LuCode, LuTerminal } from "react-icons/lu";
import { SiAngular, SiDotnet, SiDocker } from "react-icons/si";

export default function CodeShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const snippets = [
    {
      title: "ProductController.cs",
      lang: "C# / .NET 8",
      icon: <SiDotnet className="text-purple-400" />,
      badge: "ASP.NET Core Web API + Redis",
      code: `[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IProductRepository _repository;
    private readonly IDistributedCache _cache;
    private readonly ILogger<ProductsController> _logger;

    public ProductsController(
        IProductRepository repository, 
        IDistributedCache cache, 
        ILogger<ProductsController> logger)
    {
        _repository = repository;
        _cache = cache;
        _logger = logger;
    }

    [HttpGet("{id:int}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> GetProductById(int id, CancellationToken ct)
    {
        string cacheKey = $"product:{id}";
        
        // 1. Check Redis Distributed Cache first
        var cachedData = await _cache.GetStringAsync(cacheKey, ct);
        if (!string.IsNullOrEmpty(cachedData))
        {
            _logger.LogInformation("Cache hit for product {Id}", id);
            return Ok(JsonSerializer.Deserialize<ProductDto>(cachedData));
        }

        // 2. Cache miss -> Fetch from SQL Server via Dapper ORM
        var product = await _repository.GetByIdAsync(id, ct);
        if (product == null) return NotFound(new { message = "Product not found" });

        // 3. Store in Redis with sliding expiration
        var cacheOptions = new DistributedCacheEntryOptions
        {
            AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(30),
            SlidingExpiration = TimeSpan.FromMinutes(10)
        };
        await _cache.SetStringAsync(cacheKey, JsonSerializer.Serialize(product), cacheOptions, ct);

        return Ok(product);
    }
}`
    },
    {
      title: "product.service.ts",
      lang: "Angular 18 / TypeScript",
      icon: <SiAngular className="text-rose-500" />,
      badge: "Angular Signals & RxJS",
      code: `import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { Product, ApiResponse } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://api.domain.com/api/products';

  // Angular 18 Signal for reactive state
  readonly products = signal<Product[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly errorMessage = signal<string | null>(null);

  /**
   * Fetch product by ID with optimized typed observable
   */
  getProductById(id: number): Observable<Product> {
    this.isLoading.set(true);
    return this.http.get<ApiResponse<Product>>(\`\${this.apiUrl}/\${id}\`).pipe(
      map(res => res.data),
      tap(product => {
        this.isLoading.set(false);
        this.errorMessage.set(null);
      }),
      catchError((error: HttpErrorResponse) => {
        this.isLoading.set(false);
        this.errorMessage.set('Failed to retrieve product details.');
        return throwError(() => error);
      })
    );
  }
}`
    },
    {
      title: "docker-compose.yml",
      lang: "Docker / Compose",
      icon: <SiDocker className="text-sky-400" />,
      badge: "Microservices Stack",
      code: `version: '3.8'

services:
  # .NET 8 Web API Backend
  api-service:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "5000:8080"
    environment:
      - ASPNETCORE_ENVIRONMENT=Production
      - ConnectionStrings__SqlServer=Server=sqlserver;Database=NexusDb;User Id=sa;Password=SecurePassword123!;
      - ConnectionStrings__Redis=redis:6379
    depends_on:
      - sqlserver
      - redis
    networks:
      - enterprise-net

  # Angular 18 Single Page App
  angular-frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "4200:80"
    depends_on:
      - api-service
    networks:
      - enterprise-net

  # In-Memory Cache Layer
  redis:
    image: redis:7-alpine
    command: redis-server --save 60 1 --loglevel warning
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    networks:
      - enterprise-net

  # Relational Database
  sqlserver:
    image: mcr.microsoft.com/mssql/server:2022-latest
    environment:
      - ACCEPT_EULA=Y
      - MSSQL_SA_PASSWORD=SecurePassword123!
    ports:
      - "1433:1433"
    volumes:
      - sql_data:/var/opt/mssql
    networks:
      - enterprise-net

networks:
  enterprise-net:
    driver: bridge

volumes:
  redis_data:
  sql_data:`
    }
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-slate-100/50 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-400 border border-blue-200 dark:border-blue-800/60 mb-3">
            <LuTerminal className="text-sm" />
            <span>Developer Blueprint & Architecture</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Clean Architecture In Action
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mt-2 text-sm md:text-base">
            Peek behind the scenes: how I write production-ready ASP.NET Core APIs, reactive Angular services, 
            high-throughput Redis caching, and containerized Docker environments.
          </p>
        </div>

        {/* Code Editor Container */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
          {/* Editor Header / Tabs */}
          <div className="flex flex-wrap items-center justify-between bg-slate-900/90 px-4 py-3 border-b border-slate-800 gap-2">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="text-xs font-mono text-slate-500 ml-2 hidden sm:inline">siva-architecture-lab</span>
            </div>

            {/* Tab buttons */}
            <div className="flex flex-wrap items-center gap-1.5">
              {snippets.map((snippet, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium font-mono transition-all cursor-pointer ${
                    activeTab === idx
                      ? "bg-slate-800 text-blue-300 border border-blue-500/30 shadow-sm"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                  }`}
                >
                  {snippet.icon}
                  <span>{snippet.title}</span>
                </button>
              ))}
            </div>

            {/* Copy button */}
            <button
              onClick={handleCopy}
              className="flex items-center space-x-1 text-xs text-slate-400 hover:text-white px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 transition cursor-pointer"
              title="Copy snippet"
            >
              {copied ? (
                <>
                  <LuCheck className="text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <LuCopy />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Sub-header info badge */}
          <div className="px-5 py-2 bg-slate-900/40 border-b border-slate-800/60 flex justify-between items-center text-xs font-mono text-slate-400">
            <span>Stack: <span className="text-blue-400">{snippets[activeTab].badge}</span></span>
            <span className="text-slate-500">{snippets[activeTab].lang}</span>
          </div>

          {/* Code Body */}
          <div className="p-4 md:p-6 overflow-x-auto text-xs md:text-sm font-mono text-slate-200 leading-relaxed max-h-[460px] bg-slate-950">
            <pre className="selection:bg-blue-900/60">
              <code>{snippets[activeTab].code}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
