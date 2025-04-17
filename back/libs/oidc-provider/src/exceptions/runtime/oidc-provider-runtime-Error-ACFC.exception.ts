/**
 * Code generated from oidc-provider exceptions
 * @see @fc/oidc-provider/src/cli/scaffold-exceptions/run.sh
 */
import { OidcProviderBaseRuntimeException } from '../oidc-provider-base-runtime.exception';

export class OidcProviderRuntime_Error_ACFC_Exception extends OidcProviderBaseRuntimeException {
  static CODE = 'ACFC';
  static ERROR_CLASS = 'Error';
  static ERROR_DETAIL = 'payload is not of JWT type (JSON serialized object)';
  static DOCUMENTATION = 'payload is not of JWT type (JSON serialized object)';
  static ERROR_SOURCE = 'helpers/jwt.js:94';
  static UI = 'OidcProvider.exceptions.Error.ACFC';
}
