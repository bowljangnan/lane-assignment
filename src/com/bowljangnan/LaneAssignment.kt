package com.bowljangnan

import kotlin.random.Random


val aGroup = mutableListOf("이동엽", "김태훈", "김형한", "권성범", "장일영", "노유한", "김창훈2", "이재웅", "강성구", "김홍균")
val bGroup = mutableListOf("설수진", "백동건", "박영제", "장운재", "고영훈", "배규문", "안정은", "김현준", "박병호", "김한슬")
val cGroup = mutableListOf("나경진", "김자영", "서지형", "임채영", "윤경렬", "임아람", "박여진", "김혜윤", "XXX", "XXX")

val laneList = listOf(13, 14, 17, 18, 19, 20, 21, 22, 23, 24)

fun main() {
    aGroup.laneAssign()
    bGroup.laneAssign()
    cGroup.laneAssign()
}

fun MutableList<String>.laneAssign() {
    laneList.forEach { lane ->
        val playerIndex = Random.nextInt(this.size)
        println("${lane}레인 -> ${this[playerIndex]}")
        this.removeAt(playerIndex)
    }
    println()
}