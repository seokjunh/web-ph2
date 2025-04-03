package com.backend.back_springboot_ph2.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.backend.back_springboot_ph2.model.Notice;
import com.backend.back_springboot_ph2.repository.NoticeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

@RestController
@RequestMapping("/api/notice")
public class NoitceController {

    @Autowired
    private NoticeRepository noticeRepository;

    @GetMapping("/")
    public String init(){
        return "Server Started!!";
    }

    @PostMapping("/create")
    public Notice createNotice(@RequestPart("data") Notice notice) {
        return noticeRepository.save(notice);
    }

    @GetMapping("/list")
    public Page<Notice> getNotice(@RequestParam("page") int page) {
        Pageable pageable = PageRequest.of(page-1, 10, Sort.by("id").descending());
        Page<Notice> notices = noticeRepository.findAll(pageable);
        return notices;
    }

    @GetMapping("/{id}")
    public Notice getNoticeById(@PathVariable int id) {
        Notice notice = noticeRepository.findById(id).orElse(null);
        if (notice == null) {
            throw new RuntimeException("Notice not found");
        }
        return notice;
    }
}
