import React from 'react'
import Card from '../component/shared/Card'

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About This Project</h1>
            <p>This is a React App to leave feedback for a product or service</p>
            <p>version: 1.0.0</p>
            <p>
                <a href="/">Back To Home</a>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage