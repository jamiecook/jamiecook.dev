#!/usr/bin/env bash

set -eu

OPS_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

main() {
    deploy_building_footprints
}

deploy_building_footprints() {
    cd ${OPS_DIR}/../gallery/building_activity
    yarn build
    cp -R build/* ../../public/v2/gallery/building_footprints/
    firebase deploy
}

main "$@"
