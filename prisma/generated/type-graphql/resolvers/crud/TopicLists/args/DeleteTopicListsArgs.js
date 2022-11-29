"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTopicListsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicListsWhereUniqueInput_1 = require("../../../inputs/TopicListsWhereUniqueInput");
let DeleteTopicListsArgs = class DeleteTopicListsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsWhereUniqueInput_1.TopicListsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicListsWhereUniqueInput_1.TopicListsWhereUniqueInput)
], DeleteTopicListsArgs.prototype, "where", void 0);
DeleteTopicListsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteTopicListsArgs);
exports.DeleteTopicListsArgs = DeleteTopicListsArgs;
