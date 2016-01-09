#!/bin/sh
latex $1
dvips -G0 -Ppdf $1 -o $1.ps
ps2pdf $1.ps
