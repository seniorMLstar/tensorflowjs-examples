const jsonSchemaStandard = 'http://json-schema.org/draft-04/schema#'

// These are just example schemas to test the input component
// Every appliance will have it's own set as well as an app-wide set

// Will be converted to typescript types:
// https://spin.atomicobject.com/2018/03/26/typescript-data-validation/

export const fieldDefinitions = {
  kwFactorToKw: {
    $schema: jsonSchemaStandard,
    title: 'Full Capacity Usage Factor to kW',
    description:
      'Apply the appliance nominal power (in kW) to determine the load profile for this appliance',
    type: 'float',
    minimum: 0,
    maximum: 2,
    step: 0.1,
    defaultValue: 0.5,
    units: '-'
  },
  dutyCycleDerateFactor: {
    $schema: jsonSchemaStandard,
    title: 'Duty Cycle Derate Factor',
    description:
      'A welder, for example, may only run 20% within a 2 minute measured interval. In that case, enter 0.2. Mills likely run for the entire 2 minute measured interval, so would have a value of 1',
    type: 'float',
    minimum: 0,
    maximum: 2,
    step: 0.05,
    defaultValue: 1,
    units: '-'
  },
  wholesaleElectricityCost: {
    $schema: jsonSchemaStandard,
    title: 'Wholesale Electricity Cost',
    description:
      'Cost to produce or purchase electricity for the grid operator, not including unmet load costs.',
    type: 'float',
    defaultValue: 5,
    units: '$/kWh'
  },
  unmetLoadCostPerKwh: {
    $schema: jsonSchemaStandard,
    title: 'Unmet Load Electricity Cost',
    description:
      'Cost to produce or purchase electricity for the grid operator, above what their system can handle. For example, this may be the cost of diesel for a generator',
    type: 'float',
    defaultValue: 6,
    units: '$/kWh'
  },
  retailElectricityPrice: {
    $schema: jsonSchemaStandard,
    title: 'Retail Electricity Price',
    description:
      'Price of electricity for the consumer (appliance operator). This is also the revenue for the grid operator.',
    type: 'float',
    defaultValue: 8,
    units: '$/kWh'
  },
  productionUnitsPerKwh: {
    $schema: jsonSchemaStandard,
    title: 'Units of Production per kWh',
    description:
      'How many units can be produced for a single kwh. Multiply by yearly kWh to get number of units produced in a year. Units could be kg grain / kWh.',
    type: 'float',
    defaultValue: 1,
    units: '-'
  },
  revenuePerProductionUnits: {
    $schema: jsonSchemaStandard,
    title: 'Revenue Per Production Units',
    description:
      'Revenue generated per unit of production. For example, multiply by yearly kg of grain to get yearly revenue: $ / kg of grain milled.',
    type: 'float',
    defaultValue: 1,
    units: '-'
  },

  revenuePerProductionUnitsUnits: {
    $schema: jsonSchemaStandard,
    title:
      'The suffix (units) attached to revenuePerProductionUnits. Could be $ / kg, $ / hour, $ / liter',
    type: 'array',
    values: ['$ / kg of grain', '$ / hour', '$ / liter'],
    defaultValue: '-',
    units: '-'
  }
}
