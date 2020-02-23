#!/usr/bin/env bash

set -eu

CWD="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

main() {
    download_qld
}

download_qld() {
    cd ${CWD}
    for i in Primary Junior-Secondary Senior-Secondary; do
        kml_file="${i}-Catchments-2019.kml"
        geojson_file="${i}-Catchments-2019.geojson"

        [[ -f "${kml_file}" ]] || wget http://opendata.dete.qld.gov.au/geo-data/2019/${kml_file}
        rm ${geojson_file}
        [[ -f "$geojson_file" ]] || ogr2ogr -f "GeoJSON" ${geojson_file} ${kml_file} -dsco NameField=Centre_name
    done
}

main "$@"
