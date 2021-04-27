import { gql } from '@apollo/client'

import Notification from '../../components/Notification'

import Client from '../Client/index'
import { storeData } from '../StoreData/index'

const POCSEARCH_QUERY = gql`
  query pocSearchMethod(
    $now: DateTime!
    $algorithm: String!
    $lat: String!
    $long: String!
  ) {
    pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
      id
    }
  }
`
const pocSearch = (lat, long, now) => {
  Client.query({
    query: POCSEARCH_QUERY,
    variables: {
      algorithm: 'NEAREST',
      lat: '-23.632919',
      long: '-46.699453',
      now,
    },
  })
    .then((result) => {
      if (result) {
        const { data } = result
        const id = data.pocSearch.map((res) => res.id)
        storeData('poc_id', id.toString())
      }
    })
    .catch((error) => {
      Notification.emitError(error)
    })
}

export { pocSearch }
