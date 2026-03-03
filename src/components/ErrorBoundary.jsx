import { Component } from 'react'

export class ErrorBoundary extends Component {
  state = { hasError: false, error: null }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    console.error('App error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          padding: '2rem',
          background: '#fff',
          color: '#2B3210',
          fontFamily: 'system-ui, sans-serif',
        }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Something went wrong</h1>
          <pre style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflow: 'auto',
            fontSize: '0.875rem',
            border: '1px solid #ddd',
          }}>
            {this.state.error?.toString?.()}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}
