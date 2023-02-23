import React from 'react'
import { useParams, Link } from 'react-router-dom'
import countries from '../countries.json'

function CountryDetails({countries}) {
  const {alpha3Code} = useParams()
  console.log(alpha3Code);
  const country = countries.filter((country) => country.alpha3Code === alpha3Code)[0]
  console.log(country)
  return (
    <div class="col-7">
      <img
        src={`https://flagpedia.net/data/flags/icon/120x90/${country.alpha2Code.toLowerCase()}.png`}
        alt="countryflag"
      />
      <h1>{country.name.official}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area}km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((current) => {
                  return (
                    <div>
                      <Link to={`/country/${current}`}>{current}</Link>
                    </div>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails