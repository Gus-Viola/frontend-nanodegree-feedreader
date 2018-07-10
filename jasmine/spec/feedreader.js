/* eslint-disable no-undef, no-console */

/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
	describe('RSS Feeds', function() {

		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});//it allFeeds is defined


		it('each feed has a valid URL', function(){
			for (i in allFeeds) {
				expect(allFeeds[i].url).toBeDefined();
				expect(allFeeds[i].url.length).not.toBe(0);
			}//for loop
		});//it valid URL

		it('each feed has a valid name', function() {
			for (i in allFeeds) {
				expect(allFeeds[i].name).toBeDefined();
				expect(allFeeds[i].name.length).not.toBe(0);
			}//for loop
		});//it valid name

	});//test suite RSS Feeds


	describe('The menu', function() {

		it('menu element is hidden by default', function() {
			expect($('body').hasClass('menu-hidden')).toBeDefined();
		});//it hidden menu as default

		it('menu changes visibility upon click', function(){
			$('.menu-icon-link').click();	//first click makes the menu visible
			expect($('body').hasClass('slide-menu')).toBeDefined();
			$('.menu-icon-link').click();	//needs a second click to hide the menu
			expect($('body').hasClass('menu-hidden')).toBeDefined();
		});//it menu changes visibility upon click

	});//end of test suite 'The menu'


	describe('Initial Entries', function(){

		it('ensures there is at least one feed entry after loadFeed returns', function(){

			beforeEach(function(done) {
				loadFeed(0, done);
			});

			expect($('.feed').children().hasClass('entry')).toBeDefined();
		});//it loadFeed

	});//end of test suite 'Initial Entries'

	describe('New Feed Selection', function(){

			let originalFeed, newFeed;
			beforeEach(function(done) {
				loadFeed(0, function(){
					originalFeed = $('.feed').html();
					loadFeed(1, function(){
						newFeed = $('.feed').html();
						done();
					});//loadFeed 1 pass
				});//loadFeed 0 pass
			});//beforeEach

			it('ensures that when a new feed is loaded, content changes', function(){

			expect(originalFeed == newFeed).toBe(false);

		});//it new feed content changes

	});//end of test suite 'New Feed Selection'

}());
