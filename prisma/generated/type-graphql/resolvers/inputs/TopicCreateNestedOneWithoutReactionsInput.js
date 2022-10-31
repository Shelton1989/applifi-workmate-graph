"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicCreateNestedOneWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicCreateOrConnectWithoutReactionsInput_1 = require("../inputs/TopicCreateOrConnectWithoutReactionsInput");
const TopicCreateWithoutReactionsInput_1 = require("../inputs/TopicCreateWithoutReactionsInput");
const TopicWhereUniqueInput_1 = require("../inputs/TopicWhereUniqueInput");
let TopicCreateNestedOneWithoutReactionsInput = class TopicCreateNestedOneWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateWithoutReactionsInput_1.TopicCreateWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateWithoutReactionsInput_1.TopicCreateWithoutReactionsInput)
], TopicCreateNestedOneWithoutReactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateOrConnectWithoutReactionsInput_1.TopicCreateOrConnectWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateOrConnectWithoutReactionsInput_1.TopicCreateOrConnectWithoutReactionsInput)
], TopicCreateNestedOneWithoutReactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicWhereUniqueInput_1.TopicWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicWhereUniqueInput_1.TopicWhereUniqueInput)
], TopicCreateNestedOneWithoutReactionsInput.prototype, "connect", void 0);
TopicCreateNestedOneWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicCreateNestedOneWithoutReactionsInput", {
        isAbstract: true
    })
], TopicCreateNestedOneWithoutReactionsInput);
exports.TopicCreateNestedOneWithoutReactionsInput = TopicCreateNestedOneWithoutReactionsInput;
