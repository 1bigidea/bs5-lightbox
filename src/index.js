/**
 * Lightbox for Bootstrap 5
 *
 * @file Creates a modal with a lightbox carousel.
 */

import Lightbox from '../dist/index.esm';

if (window.bootstrap) {
	window.bootstrap.Lightbox = Lightbox;
}
