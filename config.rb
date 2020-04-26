########################
#
# Site setting
#
########################
config[:site_url] = 'http://example.com'
config[:site_name] = 'Example Site Name'
config[:site_description] = 'Example Site Description.'
config[:site_keywords] = 'site keywords, hogehoge, fugafuga'
config[:site_author] = 'Author Name'
config[:site_local] = 'en_US'
config[:site_page_type] = 'article'
config[:site_color] = '#4285f4'
config[:site_image] = 'assets/images/image.jpg'
config[:twitter_card] = 'summary_large_image'

########################
#
# Setting of Autoprefixer
#
########################
activate :autoprefixer do |config|
    config.browsers = ['last 3 versions']
    config.flexbox = true
    config.grid = true
    config.inline = true
end

activate :directory_indexes
activate :sprockets
activate :relative_assets
activate :i18n, langs: [:fr]
# activate :gdpr

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false
page '/templates/*.erb', layout: false
page '/components/*.erb', layout: false
page '/sitemap.xml', :layout => false
sprockets.append_path File.join(root, 'bower_components')
sprockets.append_path File.join(root, 'node_modules')

########################
#
# Folders paths
#
########################
set :relative_links, true
set :strip_index_file, true
set :trailing_slash,   true
set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'
set :fonts_dir, 'assets/fonts'

########################
#
# Generate images sizes
#
########################
# activate :middleman_simple_thumbnailer, use_specs: true

########################
#
# Generate Favicon
#
########################
activate :favicon_maker do |f|
    favicon_directory = 'assets/images/favicon'
    f.template_dir  = "source/#{favicon_directory}"
    f.icons = {
        "_favicon-original.png" => [
          { icon: "#{favicon_directory}/apple-touch-icon-180x180-precomposed.png", size: "180x180" },             # Same as apple-touch-icon-57x57.png, for iPhone 6 Plus with @3× display
          { icon: "#{favicon_directory}/apple-touch-icon-152x152-precomposed.png", size: "152x152" },             # Same as apple-touch-icon-57x57.png, for retina iPad with iOS7.
          { icon: "#{favicon_directory}/apple-touch-icon-144x144-precomposed.png", size: "144x144" },             # Same as apple-touch-icon-57x57.png, for retina iPad with iOS6 or prior.
          { icon: "#{favicon_directory}/apple-touch-icon-120x120-precomposed.png", size: "120x120" },             # Same as apple-touch-icon-57x57.png, for retina iPhone with iOS7.
          { icon: "#{favicon_directory}/apple-touch-icon-114x114-precomposed.png", size: "114x114" },             # Same as apple-touch-icon-57x57.png, for retina iPhone with iOS6 or prior.
          { icon: "#{favicon_directory}/apple-touch-icon-76x76-precomposed.png", size: "76x76" },               # Same as apple-touch-icon-57x57.png, for non-retina iPad with iOS7.
          { icon: "#{favicon_directory}/apple-touch-icon-72x72-precomposed.png", size: "72x72" },               # Same as apple-touch-icon-57x57.png, for non-retina iPad with iOS6 or prior.
          { icon: "#{favicon_directory}/apple-touch-icon-60x60-precomposed.png", size: "60x60" },               # Same as apple-touch-icon-57x57.png, for non-retina iPhone with iOS7.
          { icon: "#{favicon_directory}/apple-touch-icon-57x57-precomposed.png", size: "57x57" },               # iPhone and iPad users can turn web pages into icons on their home screen. Such link appears as a regular iOS native application. When this happens, the device looks for a specific picture. The 57x57 resolution is convenient for non-retina iPhone with iOS6 or prior. Learn more in Apple docs.
          { icon: "#{favicon_directory}/apple-touch-icon-precomposed.png", size: "57x57" },      # Same as apple-touch-icon.png, expect that is already have rounded corners (but neither drop shadow nor gloss effect).
          { icon: "#{favicon_directory}/apple-touch-icon.png", size: "57x57" },                  # Same as apple-touch-icon-57x57.png, for "default" requests, as some devices may look for this specific file. This picture may save some 404 errors in your HTTP logs. See Apple docs
          { icon: "#{favicon_directory}/favicon-512x512.png", size: "512x512" },                                  # For Android Chrome M31+.
          { icon: "#{favicon_directory}/favicon-192x192.png", size: "192x192" },                                  # For Android Chrome M31+.
          { icon: "#{favicon_directory}/favicon-196x196.png", size: "196x196" },                                  # For Android Chrome M31+.
          { icon: "#{favicon_directory}/favicon-160x160.png", size: "160x160" },                                  # For Opera Speed Dial (up to Opera 12; this icon is deprecated starting from Opera 15), although the optimal icon is not square but rather 256x160. If Opera is a major platform for you, you should create this icon yourself.
          { icon: "#{favicon_directory}/favicon-96x96.png", size: "96x96" },                                    # For Google TV.
          { icon: "#{favicon_directory}/favicon-32x32.png", size: "32x32" },                                    # For Safari on Mac OS.
          { icon: "#{favicon_directory}/favicon-16x16.png", size: "16x16" },                                    # The classic favicon, displayed in the tabs.
          { icon: "#{favicon_directory}/favicon.png", size: "16x16" },                           # The classic favicon, displayed in the tabs.
          { icon: "#{favicon_directory}/favicon.ico", size: "64x64,32x32,24x24,16x16" },         # Used by IE, and also by some other browsers if we are not careful.
          { icon: "#{favicon_directory}/mstile-70x70.png", size: "70x70" },                      # For Windows 8 / IE11.
          { icon: "#{favicon_directory}/mstile-144x144.png", size: "144x144" },
          { icon: "#{favicon_directory}/mstile-150x150.png", size: "150x150" },
          { icon: "#{favicon_directory}/mstile-310x310.png", size: "310x310" },
          { icon: "#{favicon_directory}/mstile-310x150.png", size: "310x150" }
        ]
    }
end

########################
#
# Development Configuration
#
########################
configure :development do
    config[:root_uri] = '/'
    activate :livereload
    set :debug_assets, true
end

########################
#
# Build Configuration
#
########################
configure :build do
    config[:root_uri] = '/'
    activate :gzip
    activate :minify_html
    # activate :asset_hash
    activate :minify_css
    activate :minify_javascript
end
