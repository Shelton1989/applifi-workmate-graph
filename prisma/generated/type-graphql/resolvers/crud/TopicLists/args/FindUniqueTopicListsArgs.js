"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTopicListsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicListsWhereUniqueInput_1 = require("../../../inputs/TopicListsWhereUniqueInput");
let FindUniqueTopicListsArgs = class FindUniqueTopicListsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsWhereUniqueInput_1.TopicListsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicListsWhereUniqueInput_1.TopicListsWhereUniqueInput)
], FindUniqueTopicListsArgs.prototype, "where", void 0);
FindUniqueTopicListsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTopicListsArgs);
exports.FindUniqueTopicListsArgs = FindUniqueTopicListsArgs;
