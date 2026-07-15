import './App.css'

function App() {
  return (
    <main className="container py-5">
      <div className="row align-items-center g-4">
        <div className="col-lg-7">
          <h1 className="display-5 fw-bold">OctoFit Tracker</h1>
          <p className="lead text-muted">
            A modern multi-tier fitness experience with a React frontend, an Express API,
            and a MongoDB-backed data layer.
          </p>
          <div className="d-flex gap-3">
            <a className="btn btn-primary btn-lg" href="http://localhost:8000/api/health">
              Check API
            </a>
            <a className="btn btn-outline-secondary btn-lg" href="http://localhost:5173">
              View UI
            </a>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="h5">Ready to build</h2>
              <ul className="mb-0">
                <li>React 19 + Vite frontend</li>
                <li>Express + TypeScript backend</li>
                <li>Mongoose connected to MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
