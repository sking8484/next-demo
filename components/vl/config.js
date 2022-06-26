import * as vl from 'vega-lite-api';
import { Handler } from 'vega-tooltip';

let config = {
      view: { renderer: 'svg' },
      init: (view) => {
        view.tooltip(new Handler().call);
      },
	}

export default config