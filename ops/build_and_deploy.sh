#!/usr/bin/env bash

set -eu

OPS_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

main() {
    # deploy_building_footprints
    deploy_school_catchments
    firebase deploy
}

deploy_building_footprints() {
    cd ${OPS_DIR}/../gallery/building_activity
    yarn build
    cp -R build/* ../../public/v2/gallery/building_footprints/
}

deploy_school_catchments() {
    cd ${OPS_DIR}/../gallery/school_catchments
    yarn build
    mkdir ../../public/v2/gallery/school_catchments
    cp -R build/* ../../public/v2/gallery/school_catchments/
}
main "$@"
