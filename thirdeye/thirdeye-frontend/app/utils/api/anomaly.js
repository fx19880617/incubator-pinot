/**
 * Returns the anomaly data url
 * @param {Number} startStamp - the anomaly start time
 * @param {Number} endStamp - the anomaly end time
 * @returns {String} the complete anomaly data url
 * @example getAnomalyDataUrl(1491804013000, 1491890413000) // yields => /anomalies/search/anomalyIds/1491804013000/1491890413000/1?anomalyIds=
 */
export function getAnomalyDataUrl(anomalyId) {
  return `/dashboard/anomalies/view/${anomalyId}`;
}

/**
 * Returns url for getting the Anomalies for a given YAML configuration so user can preview
 * @param {Number} startTime - the anomaly start time
 * @param {Number} endTime - the anomaly end time
 * @returns {String} the complete yaml/preview url
 * @example getAnomaliesForYamlPreview(1508472700000, 1508472800000) // yields => /yaml/preview?start=1508472700000&end=1508472800000&tuningStart=0&tuningEnd=0
 */
export function getAnomaliesForYamlPreviewUrl(startTime, endTime) {
  return `/yaml/preview?start=${startTime}&end=${endTime}&tuningStart=0&tuningEnd=0`;
}

/**
 * Returns the url for getting Anomalies for a given detection id over the specified time range
 * @param {Number} alertId - the alert id aka detection config id
 * @param {Number} startTime - the anomaly start time
 * @param {Number} endTime - the anomaly end time
 * @example getAnomaliesByAlertId(99999999,1508472700000, 1508472800000) // yields => /detection/99999999/anomalies?start=1508472700000&end=1508472800000
 */
export function getAnomaliesByAlertIdUrl(alertId, startTime, endTime) {
  return `/detection/${alertId}/anomalies?start=${startTime}&end=${endTime}`;
}

export const anomalyApiUrls = {
  getAnomalyDataUrl,
  getAnomaliesForYamlPreviewUrl,
  getAnomaliesByAlertIdUrl
};

export default {
  anomalyApiUrls
};
