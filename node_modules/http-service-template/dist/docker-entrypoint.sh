#!/bin/bash

set -e

eval $(placement)

exec "$@"
