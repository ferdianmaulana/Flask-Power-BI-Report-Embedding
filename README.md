# Flask-Power-BI-Report-Embedding
This repository provides a Flask web application for embedding Microsoft Power BI reports securely. It demonstrates how to integrate Power BI with custom authentication, token generation, and report configuration, making it easy to display interactive analytics in your own web projects.

## Features
- Embed Power BI reports in a Flask web app
- Secure authentication using Azure AD (Service Principal or Master User)
- Dynamic token generation for report access
- Customizable report and workspace configuration

## Getting Started

### Prerequisites
- Python 3.7+
- Power BI account and Azure AD app registration

### Installation
1. Clone the repository:
   ```cmd
   git clone https://github.com/ferdianmaulana/Flask-Power-BI-Report-Embedding.git
   ```
2. Install dependencies:
   ```cmd
   pip install -r requirements.txt
   ```

### Configuration
Edit `config.py` and set your Power BI and Azure AD details:
- `WORKSPACE_ID`: Your Power BI workspace ID
- `REPORT_ID`: The report ID to embed
- `TENANT_ID`, `CLIENT_ID`, `CLIENT_SECRET`: Azure AD app credentials
- `AUTHENTICATION_MODE`: 'ServicePrincipal' or 'MasterUser'

### Running the App
Start the Flask server:
```cmd
python app.py
```
Visit `http://localhost:5000` in your browser to view the embedded report.

## Project Structure
- `app.py`: Main Flask application
- `config.py`: Configuration settings
- `models/`: Data models for embedding
- `services/`: Power BI and authentication services
- `static/`: CSS, JS, and images
- `templates/`: HTML templates