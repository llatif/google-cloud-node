import { context, trace, Tracer } from '@opentelemetry/api';
import * as grpc from '@grpc/grpc-js';

export interface StaticTraceContext {
  gcpClientService?: string;
  gcpVersion?: string;
  gcpRepo?: string;
  gcpArtifact?: string;
}

export interface DynamicTraceContext {
  clientName: string;
  methodName: string;
  rpcType: 'grpc' | 'http';
}

export function getGaxTracer(): Tracer {
  return trace.getTracer('google-gax');
}

export async function traceAttempt() { }