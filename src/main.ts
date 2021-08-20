import $ from 'jquery';
import { CheckWebGPU } from './helper';

if(!CheckWebGPU().includes("Great")){
    $('#id-gpu-check').html(CheckWebGPU());
}

