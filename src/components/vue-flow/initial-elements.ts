import { type ElementData, MarkerType } from '@vue-flow/core'
import type { Elements } from '@vue-flow/core'

export const initialNodes: Elements = [
  { id: '1', type: 'input', data: { label: 'Node1' }, position: { x: 250, y: 0 }, class: 'light' },
  { id: '2', type: 'output', data: { label: 'Node2' }, position: { x: 100, y: 100 }, class: 'light' },
  { id: '3', data: { label: 'Node3' }, position: { x: 400, y: 100 }, class: 'light' },
  { id: '4', data: { label: 'Node4' }, position: { x: 150, y: 200 }, class: 'light' },
  { id: '5', type: 'output', data: { label: 'Node5' }, position: { x: 300, y: 300 }, class: 'light' }
]

export const initialEdges: ElementData[] = [
  { id: 'e1-2', source: '1', label: 'isAnimated', target: '2', animated: true },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
    markerEnd: MarkerType.ArrowClosed
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    animated: true,
    labelBgStyle: { fill: 'orange' }
  },
  { id: 'e3-4', source: '3', target: '4' }
]
