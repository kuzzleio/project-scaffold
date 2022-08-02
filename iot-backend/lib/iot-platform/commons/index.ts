import { ApplicationBuilder } from '@kuzzleio/iot-backend';

import { MyIoTApplication } from '../../MyIoTApplication';
import { DefaultDecoder } from '../../modules/decoders';

export function registerCommonsRessources (app: MyIoTApplication) {
  ApplicationBuilder.commons(commons => {
    commons.decoder.register(new DefaultDecoder());
  });
}