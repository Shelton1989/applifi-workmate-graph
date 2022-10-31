"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicCreateOrConnectWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicCreateWithoutReactionsInput_1 = require("../inputs/TopicCreateWithoutReactionsInput");
const TopicWhereUniqueInput_1 = require("../inputs/TopicWhereUniqueInput");
let TopicCreateOrConnectWithoutReactionsInput = class TopicCreateOrConnectWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicWhereUniqueInput_1.TopicWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicWhereUniqueInput_1.TopicWhereUniqueInput)
], TopicCreateOrConnectWithoutReactionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateWithoutReactionsInput_1.TopicCreateWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicCreateWithoutReactionsInput_1.TopicCreateWithoutReactionsInput)
], TopicCreateOrConnectWithoutReactionsInput.prototype, "create", void 0);
TopicCreateOrConnectWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicCreateOrConnectWithoutReactionsInput", {
        isAbstract: true
    })
], TopicCreateOrConnectWithoutReactionsInput);
exports.TopicCreateOrConnectWithoutReactionsInput = TopicCreateOrConnectWithoutReactionsInput;
