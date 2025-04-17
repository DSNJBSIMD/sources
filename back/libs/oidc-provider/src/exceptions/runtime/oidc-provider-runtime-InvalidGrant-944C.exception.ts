/**
 * Code generated from oidc-provider exceptions
 * @see @fc/oidc-provider/src/cli/scaffold-exceptions/run.sh
 */
import { OidcProviderBaseRuntimeException } from '../oidc-provider-base-runtime.exception';

export class OidcProviderRuntime_InvalidGrant_944C_Exception extends OidcProviderBaseRuntimeException {
  static CODE = '944C';
  static ERROR_CLASS = 'InvalidGrant';
  static ERROR_DETAIL = 'PKCE verification failed';
  static DOCUMENTATION = 'PKCE verification failed';
  static ERROR_SOURCE = 'helpers/pkce.js:26';
  static UI = 'OidcProvider.exceptions.InvalidGrant.944C';
}
