
import { uglify } from 'rollup-plugin-uglify';
import banner from 'rollup-plugin-banner';
let bannerText =
`/*
* Ported to ES modules and added Shadow DOM support by Horacio Gonzalez 2016-2019 
* horacio.gonzalez@gmail.com - https://lostinbrittany.dev
*
* Ported to JavaScript by Lazar Laszlo 2011 
*  lazarsoft@gmail.com, www.lazarsoft.info
*
* Copyright 2007 ZXing authors
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
`;
export default {
  input: 'dist/jsqrcode.js',
  output: {
    file: 'dist/bundle.js',
    format: 'amd',
  },
  plugins: [
    uglify({
      mangle: false,
    }),
    banner(bannerText),
  ],
};

