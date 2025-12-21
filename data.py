import os
import sys
import math
import json
import random
import datetime as dt

def get_date():
  return dt.datetime.now(dt.timezone.utc).strftime('%Y-%m-%d')

def read_file(fp):
  with open(fp, 'r') as fh:
    return(fh.read())

def read_json(fp):
  return(json.loads('{}'.format(read_file(fp))))

def random_hash():
  v = '0123456789abcdef'
  return f"0x{''.join([v[math.floor(random.random()*len(v))] for i in range(64)])}"

fp = sys.argv[1]

try:
  data = read_json(fp)
except FileNotFoundError as e:
  os.makedirs(os.path.dirname(fp), exist_ok=True)
  data = {'posts': []}

today = get_date()
if today not in [x['date'] for x in data['posts']]:
  data['posts'].append(
    {
      'date': today,
      'hash': random_hash()
    }
  )

with open(fp, 'w') as fh:
  json.dump(data, fh, indent=2)