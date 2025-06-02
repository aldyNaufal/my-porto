// WebMobilesData.js - Example structure
export const MachineLearningProjects = [
  {
    id: 1,
    title: "CineMatch: Personalized Movie Recommendation System",
    description: "This project implements a deep learning-based movie recommendation system that leverages collaborative filtering techniques enhanced with metadata enrichment. The system is designed to predict user ratings with high accuracy by analyzing historical user-item interactions and incorporating additional contextual information such as genre, release year, and user demographics. By integrating collaborative filtering with enriched metadata, the model can capture both latent preferences and explicit content features, resulting in more personalized and relevant recommendations. The use of neural network architectures allows the system to generalize better to unseen data and adapt to complex user behavior patterns, making it suitable for dynamic recommendation environments.",
    category: "Machine Learning",
    status: "Completed",
    startDate: "May 2025",
    endDate: "May 2025",
    duration: "2 weeks",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn"
    ],
    responsibilities: [
      "Conducted business understanding and problem framing for entertainment recommendation system",
      "Designed and implemented a custom neural network with embedding layers for users and movies",
      "Integrated metadata features such as average movie rating and release year to enrich model inputs",
      "Trained the model with regularization, callbacks, and evaluated performance using RMSE, MAE, R², Pearson & Spearman correlations",
      "Saved and loaded the trained model for future inference using TensorFlow’s model saving utilities"
    ],
    githubLink: "https://github.com/aldyNaufal/movie-recommendation-system.git",
    isPrivate: false
  },

  {
    id: 2,
    title: "Recipe Recommendation System",
    description: "This project implements a personalized food recipe recommendation system using deep learning techniques to generate tailored recipe suggestions based on user preferences and interaction history. At the core of the system is a Neural Collaborative Filtering (NCF) model trained to learn complex user-item relationships, enabling accurate and scalable recommendations. The focus of the recipe database is exclusively on **Indonesian cuisine**, featuring a diverse range of traditional dishes such as *nasi goreng*, *rendang*, *sate ayam*, *soto*, and many more. This ensures that the recommendations are culturally relevant and aligned with local taste preferences. The trained model is saved in Keras format and served through a Flask-based REST API, allowing seamless integration with frontend applications or backend services. The system is designed to support real-time inference, making it adaptable for deployment in various platforms such as mobile apps or internal tools. The approach emphasizes flexibility, modularity, and performance, demonstrating the potential of deep learning in enhancing user experiences in food-related digital platforms—particularly within the rich culinary context of Indonesia.",
    category: "Machine Learning",
    status: "Ongoing",
    startDate: "May 2025",
    endDate: "June 2025",
    duration: "1 month",
    technologies: [
      "Python", "Pandas", "NumPy", "TensorFlow", "Keras",
      "Scikit-learn", "Matplotlib", "Flask"
    ],
    responsibilities: [
      "Preprocessed and cleaned user-recipe interaction data using Pandas and regular expressions",
      "Encoded categorical data and split dataset using Scikit-learn utilities",
      "Built and trained a Neural Collaborative Filtering (NCF) model using TensorFlow and Keras",
      "Evaluated model performance using RMSE and MAE metrics",
      "Saved the trained model in .keras format for inference",
      "Created a Flask API to serve model predictions to external systems"
    ],
    githubLink: "https://github.com/aldyNaufal/recipe-recommendation-system.git",
    isPrivate: false
  },

  {
    id: 3,
    title: "House Price Prediction in JABODETABEK Using Ensemble Regression",
    description: "This project focuses on predicting house prices in the Greater Jakarta area (JABODETABEK) using ensemble regression techniques, including XGBoost, Random Forest, and MLP Regressor. By leveraging historical property data and applying thorough feature engineering, the project aims to support data-driven decision-making for developers, buyers, and urban planners. The resulting models provide accurate and interpretable insights into key factors influencing property values, such as location, size, and amenities—helping address the growing housing demand in urban Indonesia.",
    category: "Machine Learning",
    status: "Completed",
    startDate: "May 2025",
    endDate: "May 2025",
    duration: "1 week",
    technologies: [
      "Python",
      "XGBoost",
      "Random Forest",
      "MLP Regressor",
      "Scikit-learn",
      "Pandas",
      "Matplotlib",
      "Jupyter Notebook"
    ],
    responsibilities: [
      "Performed exploratory data analysis on 3,500+ housing records from the JABODETABEK region",
      "Cleaned and transformed geospatial, structural, and categorical features for modeling",
      "Implemented multiple regression models including Linear Regression, MLP, and XGBoost",
      "Conducted hyperparameter tuning using RandomizedSearchCV to optimize performance",
      "Analyzed feature importance to reveal socio-economic factors impacting house prices",
      "Evaluated model accuracy using RMSE, MAE, and R² metrics",
      "Created data visualizations to support stakeholder insights and policy planning"
    ],
    githubLink: "https://github.com/aldyNaufal/regression_house_price.git",
    figmaLink: null,
    isPrivate: false
  },


  {
    id: 4,
    title: "Natural Scene Image Classification using CNN and TensorFlow",
    description: "This project involves developing a deep learning model to classify natural scene images into one of six categories: Buildings, Forest, Glacier, Mountain, Sea, and Street. The dataset consists of over 25,000 labeled images resized to 150x150 pixels, sourced from the Intel Image Classification Challenge. The dataset was divided into training (~14k), validation (~3k), and test (~3k) sets. A Convolutional Neural Network (CNN) model was built and trained using TensorFlow, then exported into three formats—SavedModel, TensorFlow.js, and TensorFlow Lite—for deployment across web and mobile platforms. This model enables accurate scene recognition and can be applied in domains such as environmental monitoring, tourism, and educational tools.",
    category: "Deep Learning",
    status: "Completed",
    startDate: "May 2025",
    endDate: "May 2025",
    duration: "1 week",
    technologies: ["Python", "TensorFlow", "TensorFlow Lite", "TensorFlow.js", "CNN", "Jupyter Notebook"],
    responsibilities: [
      "Prepared and preprocessed a dataset of over 25,000 labeled natural scene images",
      "Built a CNN model using TensorFlow to classify images into 6 categories",
      "Evaluated model performance using validation and test datasets",
      "Exported the trained model into multiple formats for cross-platform deployment (web and mobile)",
      "Deployed the model using TensorFlow.js for browser and TensorFlow Lite for mobile platforms",
      "Organized project files including SavedModel, tfjs, and tflite versions for reproducibility"
    ],
    githubLink: "https://github.com/aldyNaufal/image_classification_intel.git",
    figmaLink: null,
    isPrivate: false
  },


  {
    id: 5,
    title: "Google Play Store Review Scraper: Netflix App",
    description: "This project focuses on scraping and analyzing user reviews for the Netflix app from the Google Play Store. It aims to extract insights from real user feedback, such as sentiment trends, rating distribution, and review characteristics. Using a custom scraping notebook (`scrapping.ipynb`), thousands of user reviews were collected and stored in a structured CSV format. The collected data is then processed and analyzed in `main.ipynb`, where various data cleaning techniques are applied to prepare the dataset for exploratory analysis.\n\nThe project demonstrates an end-to-end pipeline that begins with automated data collection and ends with actionable insights through visualizations and summary statistics. It covers natural language preprocessing, basic sentiment indicators, word frequency analysis, and distributional statistics on ratings and review length. By working with real-world, user-generated content, this project showcases the practical application of web scraping, data wrangling, and exploratory data analysis using Python. The output is intended to support product or UX teams by identifying patterns in user satisfaction and issues commonly faced by Netflix users on Android devices.",
    category: "Data Analysis",
    status: "Completed",
    startDate: "April 2024",
    endDate: "April 2024",
    duration: "1 week",
    technologies: ["Python", "Jupyter Notebook", "Pandas", "NumPy", "Matplotlib", "google-play-scraper"],
    responsibilities: [
      "Developed scraping pipeline to collect user reviews from the Netflix app on Google Play Store",
      "Cleaned and preprocessed textual review data for analysis",
      "Performed exploratory data analysis (EDA) on rating distribution, review length, and sentiment indicators",
      "Structured data storage using CSV format for reproducible analysis",
      "Documented usage, dependencies, and workflow in README file"
    ],
    githubLink: "https://github.com/aldyNaufal/netflix_reviews.git",
    figmaLink: null,
    isPrivate: false
  },
  {
    id: 6,
    title: "Healthy Lifestyle Analysis with Clustering and Classification",
    description: "This project explores the Healthy Lifestyle dataset to identify behavioral and environmental factors influencing individual well-being. It begins with an unsupervised clustering approach to uncover hidden lifestyle patterns in the population, followed by supervised classification to predict key health-related outcomes based on these patterns. The dataset includes features such as food preferences, BMI, smoking habits, physical activity, mental health management, and hereditary conditions. The project applies preprocessing, feature engineering, and machine learning techniques to understand correlations and derive insights into what constitutes a healthy lifestyle. Clustering results are used to segment the population into lifestyle profiles, which are then used in classification tasks to evaluate health risks, predict diet adherence, or estimate illness frequency. Visualizations and model evaluations provide a comprehensive view of health trends and support data-driven decision-making in wellness research.",
    category: "Machine Learning",
    status: "Completed",
    startDate: "March 2024",
    endDate: "March 2024",
    duration: "2 weeks",
    technologies: ["Python", "Scikit-learn", "Pandas", "Seaborn", "Matplotlib", "Jupyter Notebook"],
    responsibilities: [
      "Performed data preprocessing including handling missing values and feature selection using VarianceThreshold and correlation filtering",
      "Implemented clustering with KMeans, MiniBatchKMeans, and Gaussian Mixture Models (GMM) on original and feature-selected datasets",
      "Evaluated clustering quality using Elbow Method and Silhouette Scores",
      "Built classification models (SVM, Gaussian Naïve Bayes, Random Forest) to predict key health outcomes",
      "Assessed model performance using classification report and accuracy metrics",
      "Visualized clustering results and classification insights to interpret behavioral health patterns"
    ],
    githubLink: "https://github.com/aldyNaufal/Healthy_Lifestyle.git",
    figmaLink: null,
    isPrivate: false
  },


  {
    id: 7,
    title: "Data Imbalance Handling with GAN on HIKARI Dataset",
    description: "This project implements one of the deep learning algorithms, Generative Adversarial Network (GAN), to address data imbalance issues in the HIKARI dataset. By leveraging GAN's ability to generate synthetic data, the project aims to improve data analysis and modeling performance on imbalanced datasets.",
    category: "Machine Learning / Deep Learning",
    status: "Completed",
    startDate: "November 2024",
    endDate: "December 2024",
    duration: "1 month",
    technologies: [
      "Python", 
      "TensorFlow", 
      "Keras", 
      "Pandas", 
      "NumPy", 
      "Matplotlib", 
      "Scikit-learn"
    ],
    responsibilities: [
      "Preprocessed and cleaned the HIKARI dataset for model training",
      "Implemented a GAN model to generate synthetic data for minority classes",
      "Evaluated model performance using MAE, RMSE, and data distribution analysis",
      "Improved overall classification accuracy by addressing data imbalance"
    ],
    githubLink: "https://github.com/jonatyoung/GAN_HIKARI_2021.git",  
    isPrivate: false
  },

  {
    id: 8,
    title: "Mood Classification Using Fitness Tracker Data",
    description: "This project aims to provide insights into the performance of three machine learning algorithms in classifying datasets. The dataset used is derived from a fitness tracker, containing information to classify a person’s mood based on their activities. The algorithms employed in this project include Backpropagation, LVQm (Learning Vector Quantization Modified), and ELM (Extreme Learning Machine).",
    category: "Machine Learning",
    status: "Completed",
    startDate: "October 2024",
    endDate: "December 2024",
    duration: "2 months",
    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Scikit-learn"
    ],
    responsibilities: [
      "Preprocessed fitness tracker data for machine learning analysis",
      "Implemented three algorithms: Backpropagation, LVQm, and ELM",
      "Compared model performances using accuracy and confusion matrix",
      "Conducted result interpretation to determine the most suitable algorithm for mood classification"
    ],
    githubLink: "https://github.com/jonatyoung/LVQ_ELM.git",  // Optional, update if available
    figmaLink: null,
    isPrivate: false
  },

  {
    id: 9,
    title: "Indonesian Sports NER System",
    description: "I developed a project focused on Named Entity Recognition (NER) within the sports domain, using the Indonesian language. This project aims to identify key entities such as athlete names, teams, sports events, and locations frequently mentioned in sports news. The training data was manually curated from various Indonesian sports news sources, ensuring a diverse and relevant dataset. Preprocessing steps include tokenization, POS tagging with Stanza, and aligning tokens with their respective labels to create structured input for the model. The implemented NER model uses a bidirectional LSTM architecture, leveraging POS tag embeddings to capture contextual relationships between words. The training pipeline includes preparing and padding the sequences to handle variable input lengths. This approach provides a foundational framework for building more advanced NER systems in Indonesian sports and demonstrates the potential of combining linguistic features with deep learning.",
    category: "Machine Learning",
    status: "Completed",
    startDate: "September 2024",
    endDate: "December 2024",
    duration: "4 months",
    technologies: ["Python", "PyTorch", "Stanza", "BiLSTM"],
    responsibilities: [
      "Curated and labeled Indonesian sports news data for NER",
      "Performed tokenization and POS tagging using Stanza",
      "Designed and trained a BiLSTM-based NER model with POS embeddings",
      "Implemented sequence padding and model training pipeline",
      "Evaluated and analyzed model performance for key sports entities"
    ],
    githubLink: "https://github.com/jonatyoung/NER_Olahraga.git",
    isPrivate: false
  },


];