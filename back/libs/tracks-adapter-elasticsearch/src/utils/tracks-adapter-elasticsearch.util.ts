import { QueryDslQueryContainer } from '@elastic/elasticsearch/lib/api/types';

import { andNotCriteria, formatMultiMatchGroup } from '@fc/elasticsearch';

import { EVENT_MAPPING } from '../constants';
import { ElasticTracksType, TracksLegacyFieldsInterface } from '../interfaces';

export function formatV2Query(event: string): andNotCriteria {
  const query: andNotCriteria = { bool: { must: [{ term: { event } }] } };
  if (event === EVENT_MAPPING['checkedToken/verification']) {
    query.bool.must_not = [{ term: { scope: '' } }];
  }
  return query;
}

export const buildEventQuery = ([legacy, event]: [
  string,
  string,
]): QueryDslQueryContainer => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [action, type_action] = legacy.split('/');
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const terms = [{ action, type_action }];
  const query = {
    bool: {
      should: [formatV2Query(event), formatMultiMatchGroup(terms, true)],
    },
  };
  return query;
};

export function getContextFromLegacyTracks(track: TracksLegacyFieldsInterface) {
  const {
    fs_label: spName,
    fsId: spId,
    fi: idpName,
    fiId: idpId,
    fiSub: idpSub,
    fsSub: spSub,
    eidas: interactionAcr,
    cinematicID: interactionId,
    sessionID: browsingSessionId,
  } = track;
  return {
    spName,
    spId,
    idpName,
    idpId,
    idpSub,
    spSub,
    interactionAcr,
    interactionId,
    browsingSessionId,
  };
}

export function getLocationFromTracks(track: ElasticTracksType) {
  const {
    city_name: city,
    country_iso_code: country,
    region_name: region,
  } = track.source.geo || {};
  return { country, city: city || region };
}

export function getIpAddressFromTracks(track: ElasticTracksType): string[] {
  return track.source.address;
}
