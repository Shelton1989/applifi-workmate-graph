"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTopicListsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicListsCreateManyInput_1 = require("../../../inputs/TopicListsCreateManyInput");
let CreateManyTopicListsArgs = class CreateManyTopicListsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TopicListsCreateManyInput_1.TopicListsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTopicListsArgs.prototype, "data", void 0);
CreateManyTopicListsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTopicListsArgs);
exports.CreateManyTopicListsArgs = CreateManyTopicListsArgs;
