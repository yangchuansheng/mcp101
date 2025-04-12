import type { MDXComponents } from 'mdx/types';
import { Update } from '@/components/mdx/update';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Update,
  };
}
