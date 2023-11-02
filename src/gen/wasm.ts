
/*
* ================================
*     GENERATED FILE WARNING
* Do not edit this file manually.
* ================================
*/

/* eslint-disable @typescript-eslint/no-unused-vars, unused-imports/no-unused-imports, no-trailing-spaces */

import type {
	Pointer,
	ByteSize,
	ByteDelta,
	ByteOffset,
	FileDescriptor,
	SeekWhence,
	WasmImports,
	WasmExports,
} from '../types.js';

export interface WasmImportsExtension extends WasmImports {
	
}

export interface WasmExportsExtension extends WasmExports {
	sha256_initialize: Function;
	sha256_write: Function;
	sha256_finalize: Function;
	context_create: Function;
	ec_pubkey_parse: Function;
	ec_pubkey_serialize: Function;
	ecdsa_signature_parse_compact: Function;
	ecdsa_signature_serialize_compact: Function;
	ecdsa_verify: Function;
	ecdsa_sign: Function;
	ec_seckey_verify: Function;
	ec_pubkey_create: Function;
	context_randomize: Function;
	ecdh: Function;
}

export const map_wasm_imports = (g_imports: WasmImportsExtension) => ({
	a: {
		a: g_imports.abort,
		f: g_imports.memcpy,
		d: g_imports.resize,
		e: () => 52,  // _fd_close,
		c: () => 70,  // _fd_seek,
		b: g_imports.write,
	},
});

export const map_wasm_exports = <
	g_extension extends WasmExportsExtension=WasmExportsExtension,
>(g_exports: WebAssembly.Exports): g_extension => ({
	malloc: g_exports['i'],
	free: g_exports['j'],
	sha256_initialize: g_exports['l'],
	sha256_write: g_exports['m'],
	sha256_finalize: g_exports['n'],
	context_create: g_exports['o'],
	ec_pubkey_parse: g_exports['p'],
	ec_pubkey_serialize: g_exports['q'],
	ecdsa_signature_parse_compact: g_exports['r'],
	ecdsa_signature_serialize_compact: g_exports['s'],
	ecdsa_verify: g_exports['t'],
	ecdsa_sign: g_exports['u'],
	ec_seckey_verify: g_exports['v'],
	ec_pubkey_create: g_exports['w'],
	context_randomize: g_exports['x'],
	ecdh: g_exports['y'],
	sbrk: g_exports['sbrk'],
	memory: g_exports['g'],

	init: () => (g_exports['h'] as VoidFunction)(),
} as g_extension);

