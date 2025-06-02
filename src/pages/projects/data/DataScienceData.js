// DataScienceData.js
export const DataScienceProjects = [
  {
    id: 1,
    title: "Fashion Product ETL Pipeline",
    description: "This project is a modular ETL (Extract, Transform, Load) pipeline designed to collect, clean, and store fashion product data from a competitor’s website. Using Selenium for dynamic web scraping, the pipeline extracts key product attributes, performs data cleaning and normalization, and loads the final dataset into CSV, Google Sheets, and PostgreSQL for further analysis. The project includes comprehensive unit testing and is designed for scalability and reusability by data science teams.",
    category: "Data Engineering",
    status: "Completed",
    startDate: "April 2025",
    endDate: "April 2025",
    duration: "1 week",
    technologies: ["Python", "Selenium", "Pandas", "NumPy", "SQLAlchemy", "PostgreSQL", "Google Sheets API", "Pytest"],
    responsibilities: [
      "Developed a modular ETL pipeline consisting of separate extract, transform, and load modules",
      "Scraped dynamic product data from 50 pages using Selenium WebDriver and ChromeDriver",
      "Cleaned and normalized data by handling nulls, removing duplicates, converting formats, and adding timestamps",
      "Converted currency from USD to IDR and standardized categorical fields such as size and gender",
      "Loaded clean data into CSV files, Google Sheets, and PostgreSQL using SQLAlchemy and Sheets API",
      "Wrote unit tests for each ETL stage using Pytest and achieved 83% test coverage",
      "Implemented error handling mechanisms to ensure robustness of each ETL step",
      "Documented the workflow and created a reusable and scalable architecture for future use"
    ],
    githubLink: "https://github.com/aldyNaufal/etl_project.git",
    streamlitLink: null,
    isPrivate: false
  },
    {
    id: 2,
    title: "MySQL Binlog Replication with Go",
    description: "This project implements a MySQL binary log (binlog) replication system using Go. It captures INSERT, UPDATE, and DELETE operations from a source database and replicates them to a destination database. The system is designed to ensure consistency by saving the latest binlog position and gracefully handles shutdowns via SIGINT and SIGTERM signals. This tool aims to simplify real-time data synchronization between MySQL databases for scalable and reliable database operations.",
    category: "Backend Development",
    status: "Completed",
    startDate: "January 2025",
    endDate: "February 2025",
    duration: "4 weeks",
    technologies: [
      "Go",
      "MySQL",
      "MySQL Binlog",
      "SIGINT/SIGTERM Handling"
    ],
    responsibilities: [
      "Developed a real-time replication system that reads MySQL binlogs and syncs data to a secondary database",
      "Handled INSERT, UPDATE, and DELETE operations through custom binlog event processing logic",
      "Implemented safe shutdown logic using Go signal handling (SIGINT/SIGTERM)",
      "Built a binlog position tracking system to allow safe restarts and resume replication from the last state",
      "Configured and tested MySQL server for binlog-based replication setup",
      "Designed robust error handling to maintain continuous operation despite runtime failures"
    ],
    githubLink: "https://github.com/aldyNaufal/replication-database-project.git",
    figmaLink: null,
    isPrivate: false
  },
  {
  id: 7,
  title: "FastAPI Consultant Name Cleaner",
  description: "FastAPI Consultant Name Cleaner is an API built with FastAPI to clean and standardize consultant names. It uses fuzzy matching powered by RapidFuzz to correct inconsistencies and spelling errors in consultant names by comparing them against a reference dataset. The API provides easy integration with interactive documentation via Swagger UI and Redoc, ensuring cleaner, more consistent data across systems.",
  category: "Backend Development",
  status: "Completed",
  startDate: "March 2025",
  endDate: "March 2025",
  duration: "1 week",
  technologies: [
    "FastAPI",
    "Python",
    "RapidFuzz",
    "Pandas",
    "Uvicorn"
  ],
  responsibilities: [
    "Designed and implemented a FastAPI-based RESTful API for cleaning and standardizing consultant names",
    "Used RapidFuzz to perform fuzzy matching against a CSV-based reference dataset to correct typos and inconsistencies",
    "Built an endpoint that accepts consultant information and returns cleaned names and standardized identifiers",
    "Integrated Swagger UI and Redoc for interactive API documentation and testing",
    "Handled data input validation and ensured the API is production-ready with proper error handling",
    "Implemented Docker support for easy deployment and containerization of the application"
  ],
  githubLink: "https://github.com/aldyNaufal/model_data_cleanshing_consultant.git",
  figmaLink: null,
  isPrivate: false
},



  {
  id: 4,
  title: "Air Quality Analysis - Beijing",
  description: "This project is an interactive data analysis dashboard focused on visualizing and interpreting air quality data across 12 monitoring stations in Beijing. The dashboard allows users to explore pollution trends, analyze seasonal patterns, and identify pollution spikes across different time periods. It includes features such as AQI calculation, missing value handling, and clustering for seasonal pollution trends using K-Means. The goal is to support better environmental awareness and data-driven insights through intuitive visualizations and user-friendly dashboards.",
  category: "Data Analysis",
  status: "Completed",
  startDate: "March 2025",
  endDate: "March 2025",
  duration: "1 weeks",
  technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Streamlit"],
  responsibilities: [
    "Cleaned and preprocessed a multi-station air quality dataset including handling of missing values with median and placeholders",
    "Performed exploratory data analysis to uncover temporal and spatial trends in air pollution indicators (PM2.5, PM10, SO2, NO2, CO, O3)",
    "Calculated Air Quality Index (AQI) for each station and analyzed changes over multiple years",
    "Implemented K-Means Clustering to classify seasonal pollution patterns",
    "Built an interactive web-based dashboard using Streamlit to allow real-time exploration of the dataset",
    "Designed data visualizations to communicate trends and insights effectively",
    "Deployed the dashboard online for public access via Streamlit Cloud",
    "Documented all processes and results in a comprehensive Jupyter Notebook"
  ],
  githubLink: "https://github.com/aldyNaufal/Data_Analyst_Air_Quality.git",
  streamlitLink: "https://data-analyst-air-quality-aldy.streamlit.app/",
  isPrivate: false
  },
  {
    id: 5,
    title: "AI Employment Risk Index – Pedal Revo (IFEST 2024)",
    description: "This project aims to analyze salary levels based on the likelihood of jobs being replaced by artificial intelligence (AI). The data used includes job information from various ASEAN countries, which is then analyzed to identify the relationship between AI impact and salary levels. The analysis results show that the greater the impact of AI on a job, the lower the average salary received by workers in that job. Data processing is carried out using machine learning algorithms, while the results are visualized using the Seaborn and Matplotlib libraries. The visualizations present a list of jobs potentially replaced by AI in several ASEAN countries. Among the findings, Laos and Cambodia rank highest in the number of jobs significantly impacted by AI, indicating a high risk of job automation in these countries. This analysis provides valuable insights for policymakers and workers to prepare for challenges that may arise from the widespread adoption of AI technology in the labor sector.",
    category: "Data Science",
    status: "Completed",
    startDate: "October 2024",
    endDate: "October 2024",
    duration: "1 day",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "Matplotlib",
      "Seaborn"
    ],
    responsibilities: [
      "Conducted exploratory data analysis (EDA) to identify trends and correlations between AI impact and job sector salary levels",
      "Preprocessed data including label encoding and train-test split to prepare it for regression modeling",
      "Built multiple regression models (XGBoost, Random Forest, Gradient Boosting, Decision Tree) to predict salary based on AI-related job metrics",
      "Evaluated models using RMSE and R² Score, selecting XGBoost as the best performer with an R² Score ~0.9999",
      "Visualized correlations and salary distributions using heatmaps and categorized plots",
      "Analyzed which sectors are most vulnerable to AI disruption, with actionable insights for low- and high-skill job types"
    ],
    githubLink: "https://github.com/aldyNaufal/Final-DAC-PedalRevo.git",
    figmaLink: null,
    isPrivate: false
  },
  
  {
    id: 6,
    title: "Poverty Prediction and Economic Analysis",
    description: "This project is designed to predict the poverty rate for the upcoming year using a Machine Learning approach. The model employed is a Multi-Layer Perceptron (MLP) regressor, trained on a dataset sourced from the Sustainable Development Goals (SDGs). The project will also identify and display the top five countries with the highest increase in poverty percentage based on the predictions. These insights are expected to provide valuable guidance for decision-making and social policy planning in the future.",
    category: "Data Science",
    status : "Completed",
    startDate : "September 2024",
    endDate: "September 2024",
    duration: "1 weeks",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "OpenPyXL"
    ],
    responsibilities: [
      "Collected and merged multi-source Excel datasets representing GDP per capita, hunger levels, and housing conditions",
      "Handled missing data through imputation techniques to ensure model-readiness",
      "Conducted exploratory analysis to assess the relationship between economic indicators and poverty",
      "Built and trained a regression model using MLP Regressor to predict poverty rates based on input features",
      "Visualized relationships and model performance to support interpretability",
      "Delivered reproducible results through well-documented and modular Jupyter Notebooks",
      "Prepared predictions to support poverty reduction policy recommendations"
    ],
    githubLink: "https://github.com/aldyNaufal/DAC2024-PedalRevo.git",
    figmaLink: null,
    isPrivate: false
  },


    {
    id: 7,
    title: "UMKM Digitalization – Sales Recording System for Sports Equipment",
    description: "I developed a digitalization project for UMKM (Micro, Small, and Medium Enterprises) in Malang to assist local businesses in digitally recording sales of sports equipment. The project involved designing a structured SQL Server database, migrating manual sales records into the digital system, and creating a Java-based GUI for user-friendly transaction management. An automated weekly sales report system was also implemented using Jasper Reports. This initiative helps local UMKM optimize their data management and transition into more professional, tech-supported operations.",
    category: "Software Development",
    status: "Completed",
    startDate: "October 2024",
    endDate: "November 2024",
    duration: "4 weeks",
    technologies: [
      "Java",
      "SQL Server",
      "Jasper Reports",
      "Swing GUI"
    ],
    responsibilities: [
      "Designed and implemented a relational database in SQL Server for secure and organized sales data storage",
      "Migrated sales records from manual bookkeeping into the digital system",
      "Developed a Java-based GUI using Swing to simplify daily sales transaction recording for UMKM owners",
      "Integrated Jasper Reports to automatically generate structured weekly sales reports",
      "Tested the system for usability and reliability to ensure smooth adoption by non-technical users",
      "Facilitated the digital transformation process of local UMKM in Malang by streamlining data recording workflows"
    ],
    githubLink: "https://github.com/aldyNaufal/final_project_papb.git",
    figmaLink: null,
    isPrivate: false
  }

];
