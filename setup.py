import os

import setuptools

here = os.path.abspath(os.path.dirname(__file__))

with open("README.md", encoding="UTF-8") as fh:
    long_description = fh.read()


# Get the code version
version = {}
with open(os.path.join(here, "flaml/version.py")) as fp:
    exec(fp.read(), version)
__version__ = version["__version__"]

install_requires = [
    "NumPy>=1.17",
]


setuptools.setup(
    name="FLAML",
    version=__version__,
    author="Microsoft Corporation",
    author_email="hpo@microsoft.com",
    description="A fast library for automated machine learning and tuning",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/microsoft/FLAML",
    packages=setuptools.find_packages(include=["flaml*"]),
    package_data={
        "flaml.default": ["*/*.json"],
    },
    include_package_data=True,
    install_requires=install_requires,
    extras_require={
        "automl": [
            "lightgbm>=2.3.1",
            "xgboost>=0.90,<3.0.0",
            "scipy>=1.4.1",
            "pandas>=1.1.4",
            "scikit-learn>=1.0.0",
        ],
        "notebook": [
            "jupyter",
        ],
        "spark": [
            "pyspark>=3.2.0",
            "joblibspark>=0.5.0",
            "joblib<=1.3.2",
        ],
        "test": [
            "jupyter",
            "lightgbm>=2.3.1",
            "xgboost>=0.90,<2.0.0",
            "scipy>=1.4.1",
            "pandas>=1.1.4,<2.0.0; python_version<'3.10'",
            "pandas>=1.1.4; python_version>='3.10'",
            "scikit-learn>=1.0.0",
            "thop",
            "pytest>=6.1.1",
            "coverage>=5.3",
            "pre-commit",
            "torch",
            "torchvision",
            "catboost>=0.26,<1.2; python_version<'3.11'",
            "catboost>=0.26; python_version>='3.11'",
            "rgf-python",
            "optuna>=2.8.0,<=3.6.1",
            "openml",
            "statsmodels>=0.12.2",
            "psutil==5.8.0",
            "dataclasses",
            "transformers[torch]==4.26",
            "datasets<=3.5.0",
            "nltk<=3.8.1",  # 3.8.2 doesn't work with mlflow
            "rouge_score",
            "hcrystalball==0.1.10",
            "seqeval",
            "pytorch-forecasting>=0.9.0,<=0.10.1; python_version<'3.11'",
            # "pytorch-forecasting==0.10.1; python_version=='3.11'",
            "mlflow==2.15.1",
            "joblibspark>=0.5.0",
            "joblib<=1.3.2",
            "nbconvert",
            "nbformat",
            "ipykernel",
            "pytorch-lightning<1.9.1",  # test_forecast_panel
            "tensorboardX==2.6",  # test_forecast_panel
            "requests<2.29.0",  # https://github.com/docker/docker-py/issues/3113
            "packaging",
            "pydantic==1.10.9",
            "sympy",
            "wolframalpha",
            "dill",  # a drop in replacement of pickle
        ],
        "catboost": [
            "catboost>=0.26,<1.2; python_version<'3.11'",
            "catboost>=0.26,<=1.2.5; python_version>='3.11'",
        ],
        "blendsearch": [
            "optuna>=2.8.0,<=3.6.1",
            "packaging",
        ],
        "ray": [
            "ray[tune]~=1.13",
        ],
        "azureml": [
            "azureml-mlflow",
        ],
        "nni": [
            "nni",
        ],
        "vw": [
            "vowpalwabbit>=8.10.0, <9.0.0",
            "scikit-learn",
        ],
        "hf": [
            "transformers[torch]==4.26",
            "datasets",
            "nltk<=3.8.1",
            "rouge_score",
            "seqeval",
        ],
        "nlp": [  # for backward compatibility; hf is the new option name
            "transformers[torch]==4.26",
            "datasets",
            "nltk<=3.8.1",
            "rouge_score",
            "seqeval",
        ],
        "ts_forecast": [
            "holidays<0.14",  # to prevent installation error for prophet
            "prophet>=1.0.1",
            "statsmodels>=0.12.2",
            "hcrystalball==0.1.10",
        ],
        "forecast": [
            "holidays<0.14",  # to prevent installation error for prophet
            "prophet>=1.0.1",
            "statsmodels>=0.12.2",
            "hcrystalball==0.1.10",
            "pytorch-forecasting>=0.9.0; python_version<'3.11'",
            # "pytorch-forecasting==0.10.1; python_version=='3.11'",
            "pytorch-lightning==1.9.0",
            "tensorboardX==2.6",
        ],
        "benchmark": ["catboost>=0.26", "psutil==5.8.0", "xgboost==1.3.3", "pandas==1.1.4"],
        "openai": ["openai==0.27.8", "diskcache"],
        "autogen": ["openai==0.27.8", "diskcache", "termcolor"],
        "mathchat": ["openai==0.27.8", "diskcache", "termcolor", "sympy", "pydantic==1.10.9", "wolframalpha"],
        "retrievechat": [
            "openai==0.27.8",
            "diskcache",
            "termcolor",
            "chromadb",
            "tiktoken",
            "sentence_transformers",
        ],
        "synapse": [
            "joblibspark>=0.5.0",
            "optuna>=2.8.0,<=3.6.1",
            "pyspark>=3.2.0",
        ],
        "autozero": ["scikit-learn", "pandas", "packaging"],
    },
    classifiers=[
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
        # Specify the Python versions you support here.
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
    ],
    python_requires=">=3.8",
)
