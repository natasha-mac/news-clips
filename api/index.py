# -*- coding: utf-8 -*-

from __future__ import absolute_import
from __future__ import division, print_function, unicode_literals
from flask import Flask
from flask_cors import CORS

import requests

from sumy.parsers.html import HtmlParser
from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lsa import LsaSummarizer as Summarizer
from sumy.nlp.stemmers import Stemmer
from sumy.utils import get_stop_words

app = Flask(__name__)
CORS(app)

LANGUAGE = "english"
SENTENCES_COUNT = 4

@app.route('/api/summary', methods=['GET'])
def hello_world():
    response = requests.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=649fd9f8a3cb46bf9da57a9f1116cfa7")
    data = response.json()
    for article in data["articles"]:
        parser = HtmlParser.from_url(article["url"], Tokenizer(LANGUAGE))
        stemmer = Stemmer(LANGUAGE)
        result = ""
        summarizer = Summarizer(stemmer)
        summarizer.stop_words = get_stop_words(LANGUAGE)

        for sentence in summarizer(parser.document, SENTENCES_COUNT):
            result += str(sentence)
        article["summary"] = result 
    return data
  

if __name__ == '__main__':
    app.run(port=5328)