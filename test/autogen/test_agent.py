def test_agent():
    from flaml.autogen.agent import Agent

    dummy_agent_1 = Agent(name="dummy_agent_1")
    dummy_agent_2 = Agent(name="dummy_agent_2")

    dummy_agent_1.receive("hello", dummy_agent_2)  # receive a str
    dummy_agent_1.receive(
        {
            "content": "hello",
        },
        dummy_agent_2,
    )  # receive a dict
    # receive dict with wrong field, there should be no error raised
    dummy_agent_1.receive({"message": "hello"}, dummy_agent_2)

    dummy_agent_1._send("hello", dummy_agent_2)  # send a str
    dummy_agent_1._send(
        {
            "content": "hello",
        },
        dummy_agent_2,
    )  # send a dict
    try:
        dummy_agent_1._send({"message": "hello"}, dummy_agent_2)  # send dict with wrong field
    except AssertionError:
        print("AssertionError caught")
        pass


if __name__ == "__main__":
    test_agent()
