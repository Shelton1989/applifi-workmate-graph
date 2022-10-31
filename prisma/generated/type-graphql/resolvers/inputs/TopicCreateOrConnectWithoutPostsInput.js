"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicCreateOrConnectWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicCreateWithoutPostsInput_1 = require("../inputs/TopicCreateWithoutPostsInput");
const TopicWhereUniqueInput_1 = require("../inputs/TopicWhereUniqueInput");
let TopicCreateOrConnectWithoutPostsInput = class TopicCreateOrConnectWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicWhereUniqueInput_1.TopicWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicWhereUniqueInput_1.TopicWhereUniqueInput)
], TopicCreateOrConnectWithoutPostsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateWithoutPostsInput_1.TopicCreateWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicCreateWithoutPostsInput_1.TopicCreateWithoutPostsInput)
], TopicCreateOrConnectWithoutPostsInput.prototype, "create", void 0);
TopicCreateOrConnectWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicCreateOrConnectWithoutPostsInput", {
        isAbstract: true
    })
], TopicCreateOrConnectWithoutPostsInput);
exports.TopicCreateOrConnectWithoutPostsInput = TopicCreateOrConnectWithoutPostsInput;
