import React from 'react'
import BlockUI from 'react-block-ui'
import { useHistory } from 'react-router-dom'

import useForm from '../../Hooks/useForm'

import Notification from '../../components/Notification'
import PageDefault from '../../components/PageDefault'

import { pocSearch } from '../../services/Poc'
import { _poc } from '../../services/Product'
import { getGeocode } from '../../services/Geocode'
import { getData } from '../../services/StoreData'

import {
  Wrapper,
  SearchWrapper,
  Title,
  InputField,
  SubmitButton,
} from './style'

const Home = () => {
  const [{ values, loading }, handleChange, handleSubmit] = useForm()
  let history = useHistory()

  const submit = async () => {
    try {
      const responseGeocode = await getGeocode(encodeURI(values.name))

      const lat = responseGeocode.lat
      const lon = responseGeocode.lon
      const currentDateTime = new Date().toISOString()

      pocSearch(lat, lon, currentDateTime)

      getData('poc_id').then((id) => {
        _poc(id)
      })

      history.push('/products')
    } catch (error) {
      Notification.emitError(error)
    }
  }

  return (
    <BlockUI blocking={loading} keepInView>
      <Notification />
      <PageDefault>
        <Wrapper>
          <SearchWrapper>
            <Title>Bebidas geladas a preço de mercado na sua casa agora </Title>
            <form onSubmit={handleSubmit(submit)}>
              <InputField
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Digite o seu endereço"
              />

              <SubmitButton type="submit">
                {loading ? 'Buscando...' : 'Buscar'}
              </SubmitButton>
            </form>
          </SearchWrapper>
        </Wrapper>
      </PageDefault>
    </BlockUI>
  )
}

export default Home
