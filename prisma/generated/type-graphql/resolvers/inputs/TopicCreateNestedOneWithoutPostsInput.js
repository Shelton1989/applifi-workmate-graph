"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicCreateNestedOneWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicCreateOrConnectWithoutPostsInput_1 = require("../inputs/TopicCreateOrConnectWithoutPostsInput");
const TopicCreateWithoutPostsInput_1 = require("../inputs/TopicCreateWithoutPostsInput");
const TopicWhereUniqueInput_1 = require("../inputs/TopicWhereUniqueInput");
let TopicCreateNestedOneWithoutPostsInput = class TopicCreateNestedOneWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateWithoutPostsInput_1.TopicCreateWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateWithoutPostsInput_1.TopicCreateWithoutPostsInput)
], TopicCreateNestedOneWithoutPostsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateOrConnectWithoutPostsInput_1.TopicCreateOrConnectWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateOrConnectWithoutPostsInput_1.TopicCreateOrConnectWithoutPostsInput)
], TopicCreateNestedOneWithoutPostsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicWhereUniqueInput_1.TopicWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicWhereUniqueInput_1.TopicWhereUniqueInput)
], TopicCreateNestedOneWithoutPostsInput.prototype, "connect", void 0);
TopicCreateNestedOneWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicCreateNestedOneWithoutPostsInput", {
        isAbstract: true
    })
], TopicCreateNestedOneWithoutPostsInput);
exports.TopicCreateNestedOneWithoutPostsInput = TopicCreateNestedOneWithoutPostsInput;
