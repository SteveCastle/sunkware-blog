---
templateKey: blog-post
title: Advent of Code 2018 Day 1
date: 2018-12-03T15:04:10.000Z
description: Solution for Advent of Code 2018 Day One in Go
tags:
  - programming
  - code challenges
---

Given an input of signed integers, first return the total summation of the
series, then monitor the state of the summation as it progresses and return the
first sum that is reached twice. Multiple iterations of the summation are
allowed for the second problem.

```go{numberLines: true}
package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

// Function to return a slice of ints given a file path
// where each line is a signed integer string
func readIntLines(path string) ([]int, error) {
	file, err := os.Open(path)
	if err != nil {
		return nil, err
	}
	defer file.Close()
	scanner := bufio.NewScanner(file)
	scanner.Split(bufio.ScanLines)
	var lines []int
	for scanner.Scan() {
		num, err := strconv.Atoi(scanner.Text())
		if err != nil {
			return nil, err
		}
		lines = append(lines, num)
	}
	return lines, nil
}

// Read file and calculate summation.
func main() {
	lines, err := readIntLines("input.txt")
	if err != nil {
		fmt.Println(err)
	}
	// Hold value of current sum and a map of sum frequencies over time.
	sum := 0
	freq := map[int]int{}
	looking := true
	iterations := 0

	// Repeat until a duplicate frequency occurs.
	for looking {
		// Always return the frequency after one iteration.
		// For Part: 1 of problem.
		if iterations == 1 {
			fmt.Println(sum)
		}

		// Sum lines in input.
		for _, line := range lines {
			sum = sum + line
			// Print if a duplicate frequency is found.
			if _, ok := freq[sum]; ok {
				fmt.Printf("First recurring freq: %d\n", sum)
				looking = false
			}
			// Mark each frequency as it occurs.
			freq[sum] = freq[sum] + 1

		}
		iterations++
	}
}
```
