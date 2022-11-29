"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTopicListsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicListsCreateInput_1 = require("../../../inputs/TopicListsCreateInput");
let CreateTopicListsArgs = class CreateTopicListsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsCreateInput_1.TopicListsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicListsCreateInput_1.TopicListsCreateInput)
], CreateTopicListsArgs.prototype, "data", void 0);
CreateTopicListsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateTopicListsArgs);
exports.CreateTopicListsArgs = CreateTopicListsArgs;
