const Endpoint = cubic.nodes.warframe.core.Endpoint
const Aggregate = require(`${process.cwd()}/api/lib/aggregator.js`)

class Activity extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Trade activity, used for "busy hours".'
    this.schema.query = [
      {
        name: 'item',
        description: 'Item to reduce orders by. If no item is specified, the data for all items is returned.'
      }
    ]
  }

  async main (req, res) {
    res.send('lul')
  }
}

module.exports = Activity
