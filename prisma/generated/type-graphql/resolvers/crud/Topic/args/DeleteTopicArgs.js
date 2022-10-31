"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTopicArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicWhereUniqueInput_1 = require("../../../inputs/TopicWhereUniqueInput");
let DeleteTopicArgs = class DeleteTopicArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicWhereUniqueInput_1.TopicWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicWhereUniqueInput_1.TopicWhereUniqueInput)
], DeleteTopicArgs.prototype, "where", void 0);
DeleteTopicArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteTopicArgs);
exports.DeleteTopicArgs = DeleteTopicArgs;
